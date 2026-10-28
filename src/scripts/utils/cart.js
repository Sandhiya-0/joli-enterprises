// Joli Enterprises Wholesale Cart Management Utility
import { getProductById, calculateTieredPrice } from '../../data/products.js';

const CART_STORAGE_KEY = 'joli_wholesale_cart_v1';

export function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load cart', e);
  }
  return [];
}

export function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { cart } }));
    updateCartBadge();
  } catch (e) {
    console.error('Failed to save cart', e);
  }
}

export function addToCart(productId, quantityToAdd = null) {
  const product = getProductById(productId);
  if (!product) return { success: false, message: 'Product not found' };

  const cart = getCart();
  const existingIndex = cart.findIndex(item => item.productId === productId);

  // If no quantity specified, default to product's MOQ
  const minQty = product.moq || 1;
  const step = product.increment || 1;

  if (existingIndex > -1) {
    const currentQty = cart[existingIndex].quantity;
    const addedQty = quantityToAdd !== null ? quantityToAdd : step;
    const newQty = currentQty + addedQty;
    
    const unitPrice = calculateTieredPrice(product, newQty);
    cart[existingIndex].quantity = newQty;
    cart[existingIndex].unitPrice = unitPrice;
    cart[existingIndex].lineTotal = unitPrice * newQty;
  } else {
    const initialQty = quantityToAdd !== null ? Math.max(quantityToAdd, minQty) : minQty;
    const unitPrice = calculateTieredPrice(product, initialQty);
    
    cart.push({
      productId: product.id,
      name: product.name,
      sku: product.sku,
      image: product.images[0],
      category: product.category,
      categoryName: product.categoryName,
      packQuantity: product.packQuantity,
      moq: product.moq,
      increment: product.increment,
      quantity: initialQty,
      unitPrice: unitPrice,
      lineTotal: unitPrice * initialQty
    });
  }

  saveCart(cart);
  return { success: true, cart };
}

export function updateCartQuantity(productId, newQty) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const itemIndex = cart.findIndex(item => item.productId === productId);
  if (itemIndex === -1) return;

  const minQty = product.moq || 1;
  const safeQty = Math.max(minQty, parseInt(newQty, 10) || minQty);

  const unitPrice = calculateTieredPrice(product, safeQty);
  cart[itemIndex].quantity = safeQty;
  cart[itemIndex].unitPrice = unitPrice;
  cart[itemIndex].lineTotal = unitPrice * safeQty;

  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = getCart().filter(item => item.productId !== productId);
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}

export function getCartTotals() {
  const cart = getCart();
  let subtotal = 0;
  let totalItemsCount = 0;

  cart.forEach(item => {
    subtotal += item.lineTotal;
    totalItemsCount += item.quantity;
  });

  // Wholesale GST 18%
  const gst = subtotal * 0.18;
  
  // Wholesale bulk shipping: Free above ₹5000, else flat ₹250
  const shipping = subtotal === 0 ? 0 : (subtotal >= 5000 ? 0 : 250);
  const grandTotal = subtotal + gst + shipping;

  return {
    itemsCount: totalItemsCount,
    uniqueLines: cart.length,
    subtotal,
    gst,
    shipping,
    grandTotal
  };
}

export function formatINR(amount) {
  return '₹' + Number(amount || 0).toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
}

export function updateCartBadge() {
  const totals = getCartTotals();
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(badge => {
    badge.textContent = totals.itemsCount;
    if (totals.itemsCount > 0) {
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  });
}
