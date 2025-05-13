// بيانات المحتوى
let contents = [
    {
        title: "أدوات الأمان المتقدمة",
        category: "أدوات الأمان",
        image: "https://via.placeholder.com/400x200?text=أدوات+الأمان",
        btnText: "تحميل الأداة",
        btnLink: "#",
        isFeatured: true
    },
    {
        title: "دليل حماية الخصوصية",
        category: "أدلة",
        image: "https://via.placeholder.com/400x200?text=دليل+الخصوصية",
        btnText: "قراءة الدليل",
        btnLink: "#",
        isFeatured: true
    }
];

// عرض المحتوى
function displayContents() {
    const featuredContainer = document.getElementById('featured-content');
    const securityToolsContainer = document.getElementById('security-tools');
    
    // مسح المحتوى الحالي
    featuredContainer.innerHTML = '';
    securityToolsContainer.innerHTML = '';
    
    // عرض المحتوى المميز
    contents.filter(content => content.isFeatured).forEach(content => {
        const contentElement = document.createElement('div');
        contentElement.className = 'content-card';
        contentElement.innerHTML = `
            <img src="${content.image}" alt="${content.title}" class="content-img">
            <div class="content-body">
                <h3 class="content-title">${content.title}</h3>
                <a href="${content.btnLink}" class="content-btn">${content.btnText}</a>
            </div>
        `;
        featuredContainer.appendChild(contentElement);
    });
    
    // عرض أدوات الأمان
    contents.filter(content => content.category === "أدوات الأمان").forEach(tool => {
        const toolElement = document.createElement('div');
        toolElement.className = 'content-card';
        toolElement.innerHTML = `
            <img src="${tool.image}" alt="${tool.title}" class="content-img">
            <div class="content-body">
                <h3 class="content-title">${tool.title}</h3>
                <a href="${tool.btnLink}" class="content-btn">${tool.btnLink}</a>
            </div>
        `;
        securityToolsContainer.appendChild(toolElement);
    });
}

// تسجيل دخول الأدمن
function loginAdmin() {
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    if (username === 'admin' && password === '2023') {
        document.getElementById('admin-actions').style.display = 'block';
        alert('تم تسجيل الدخول بنجاح!');
    } else {
        alert('اسم المستخدم أو كلمة السر غير صحيحة!');
    }
}

// إضافة محتوى جديد
function addPost() {
    const title = document.getElementById('post-title').value;
    const image = document.getElementById('post-image').value;
    const btnText = document.getElementById('post-btn-text').value;
    const btnLink = document.getElementById('post-btn-link').value;
    
    if (title && image && btnText && btnLink) {
        const newContent = {
            title,
            category: "أدوات الأمان",
            image,
            btnText,
            btnLink,
            isFeatured: true
        };
        
        contents.unshift(newContent);
        displayContents();
        
        // مسح حقول الإدخال
        document.getElementById('post-title').value = '';
        document.getElementById('post-image').value = '';
        document.getElementById('post-btn-text').value = '';
        document.getElementById('post-btn-link').value = '';
        
        alert('تمت إضافة المحتوى بنجاح!');
    } else {
        alert('الرجاء ملء جميع الحقول!');
    }
}

// البحث في المحتوى
document.querySelector('.search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const contentCards = document.querySelectorAll('.content-card');
    
    contentCards.forEach(card => {
        const title = card.querySelector('.content-title').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// عرض المحتوى عند تحميل الصفحة
window.onload = displayContents;
