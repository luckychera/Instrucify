/* =========================
   AUTH UTILITIES (Instructify)
   ========================= */

// get logged-in user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

// login user
function loginUser(user) {
  localStorage.setItem("currentUser", JSON.stringify(user));
}

// logout user
function logoutUser() {
  localStorage.removeItem("currentUser");
  window.location.href = "/index.html";
}

// protect pages
function requireAuth() {
  const user = getCurrentUser();

  if (!user) {
    const next =
      window.location.pathname + window.location.search;

    window.location.href =
      "/login.html?next=" + encodeURIComponent(next);
  }
}

// redirect logged-in users away from login/register
function redirectIfLoggedIn(defaultPage = "/index.html") {
  const user = getCurrentUser();
  if (user) {
    const params = new URLSearchParams(window.location.search);
    const next = params.get("next") || defaultPage;
    window.location.href = next;
  }
}

// update navbar UI
function updateAuthUI() {
  const user = getCurrentUser();
  const loginLink = document.querySelector('a[href*="login.html"]');

  if (user && loginLink) {
    loginLink.textContent = `Hi, ${user.fullName || user.email}`;
    loginLink.href = "/dashboard.html";
  }
}
