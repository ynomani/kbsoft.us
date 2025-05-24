// Toggle preview blog post
function togglePost(btn) {
  const content = btn.nextElementSibling;
  const isVisible = content.style.display === 'block';
  content.style.display = isVisible ? 'none' : 'block';
  btn.textContent = isVisible ? 'Read More →' : 'Read Less ↑';
}

// Load full blog post
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const post = urlParams.get('post');

  // Blog loader
  if (post) {
    const blogPosts = document.querySelector(".blog-posts");
    if (blogPosts) blogPosts.style.display = "none";

    const dynamicContainer = document.getElementById("dynamic-blog");
    if (dynamicContainer) dynamicContainer.style.display = "block";

    fetch(`blog/posts/${post}.md`)
      .then(res => res.text())
      .then(md => {
        const converter = new showdown.Converter();
        document.getElementById('post-title').innerText =
          post.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        document.getElementById('post-content').innerHTML = converter.makeHtml(md);

        const fbComments = document.querySelector('.fb-comments');
        fbComments.setAttribute('data-href', window.location.href);
        if (typeof FB !== 'undefined') {
          FB.XFBML.parse(document.getElementById("dynamic-blog"));
        }
      })
      .catch(err => {
        document.getElementById('post-content').innerHTML = "<p>Sorry, the blog post could not be loaded.</p>";
        console.error("Blog post load error:", err);
      });
  }

  // ✅ NAV LINK FIX: Strip query string on click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href.includes("#")) {
        e.preventDefault();
        const sectionId = href.split("#")[1];

        // Build clean hash-only URL
        const newUrl = `${window.location.origin}${window.location.pathname}#${sectionId}`;
        history.replaceState({}, '', newUrl); // replaces the whole URL

        // Scroll to section manually
        const target = document.getElementById(sectionId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });

          // Reset blog view
          const blogPosts = document.querySelector(".blog-posts");
          const dynamicBlog = document.getElementById("dynamic-blog");
          if (blogPosts && dynamicBlog) {
            blogPosts.style.display = "block";
            dynamicBlog.style.display = "none";
          }
        }
      }
    });
  });
});


