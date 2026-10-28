// Accessible Quick Enquiry Modal Dialog

let modalBackdrop = null;
let modalForm = null;
let modalProductInput = null;
let modalAlertBox = null;
let modalSubmitBtn = null;

export function initEnquiryModal() {
  modalBackdrop = document.getElementById('enquiry-modal');
  modalForm = document.getElementById('modal-enquiry-form');
  modalProductInput = document.getElementById('modal-product-name');
  modalAlertBox = document.getElementById('modal-alert-box');
  modalSubmitBtn = document.getElementById('modal-submit-btn');

  const closeBtn = document.getElementById('modal-close-btn');
  const quickEnquiryBtn = document.getElementById('btn-quick-enquiry');
  const mobileEnquiryBtn = document.getElementById('btn-mobile-enquiry');

  if (quickEnquiryBtn) {
    quickEnquiryBtn.addEventListener('click', () => openEnquiryModal());
  }

  if (mobileEnquiryBtn) {
    mobileEnquiryBtn.addEventListener('click', () => {
      // Close mobile drawer if open
      const drawer = document.getElementById('mobile-drawer');
      const backdrop = document.getElementById('mobile-drawer-backdrop');
      if (drawer) drawer.classList.remove('open');
      if (backdrop) backdrop.classList.remove('open');
      openEnquiryModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeEnquiryModal);
  }

  // Click outside dialog to close
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeEnquiryModal();
      }
    });
  }

  // Escape key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeEnquiryModal();
    }
  });

  // Form submission handler
  if (modalForm) {
    modalForm.addEventListener('submit', handleModalSubmit);
  }
}

export function openEnquiryModal(productName = '') {
  if (!modalBackdrop) return;

  // Reset alert box
  if (modalAlertBox) {
    modalAlertBox.style.display = 'none';
    modalAlertBox.className = 'alert-box';
    modalAlertBox.innerHTML = '';
  }

  // Clear previous errors
  clearModalErrors();

  if (modalProductInput) {
    modalProductInput.value = productName || '';
  }

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus the first empty field
  setTimeout(() => {
    const target = productName ? document.getElementById('modal-full-name') : (modalProductInput || document.getElementById('modal-full-name'));
    if (target) target.focus();
  }, 100);
}

export function closeEnquiryModal() {
  if (!modalBackdrop) return;
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

function clearModalErrors() {
  const errFields = ['err-modal-name', 'err-modal-email', 'err-modal-message'];
  errFields.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
  });

  const inputs = modalForm?.querySelectorAll('.form-control');
  inputs?.forEach(inp => inp.classList.remove('error'));
}

function handleModalSubmit(e) {
  e.preventDefault();
  clearModalErrors();

  const nameInput = document.getElementById('modal-full-name');
  const emailInput = document.getElementById('modal-email');
  const messageInput = document.getElementById('modal-message');

  let hasError = false;

  // Validate Name
  if (!nameInput.value.trim()) {
    nameInput.classList.add('error');
    document.getElementById('err-modal-name').textContent = 'Please enter your name.';
    hasError = true;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput.value.trim()) {
    emailInput.classList.add('error');
    document.getElementById('err-modal-email').textContent = 'Please enter your business email.';
    hasError = true;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailInput.classList.add('error');
    document.getElementById('err-modal-email').textContent = 'Please provide a valid email format.';
    hasError = true;
  }

  // Validate Message
  if (!messageInput.value.trim()) {
    messageInput.classList.add('error');
    document.getElementById('err-modal-message').textContent = 'Please specify your wholesale enquiry details.';
    hasError = true;
  }

  if (hasError) return;

  // Simulated Submission Loading State
  const originalBtnHtml = modalSubmitBtn.innerHTML;
  modalSubmitBtn.disabled = true;
  modalSubmitBtn.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-icon"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"></path></svg>
    <span>Processing Demo Enquiry...</span>
  `;

  setTimeout(() => {
    modalSubmitBtn.disabled = false;
    modalSubmitBtn.innerHTML = originalBtnHtml;

    if (modalAlertBox) {
      modalAlertBox.style.display = 'block';
      modalAlertBox.className = 'alert-box alert-success';
      modalAlertBox.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <div>
          <strong>Demo Enquiry Received!</strong><br>
          Thank you, ${nameInput.value.trim()}. This simulated enquiry has been logged successfully for review. (Client-side demo only).
        </div>
      `;
    }

    modalForm.reset();
  }, 1000);
}
