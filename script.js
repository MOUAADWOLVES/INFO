// بيانات المحتوى
let contents = [
    {
        title: "أدوات الأمان المتقدمة",
        category: "أدوات الأمان",
        image: "https://source.unsplash.com/random/600x400/?security,tech",
        btnText: "تحميل الأداة",
        btnLink: "#",
        isFeatured: true
    },
    {
        title: "دليل حماية الخصوصية الشامل",
        category: "أدلة",
        image: "https://source.unsplash.com/random/600x400/?privacy,guide",
        btnText: "قراءة الدليل",
        btnLink: "#",
        isFeatured: true
    },
    {
        title: "أحدث تقنيات التشفير",
        category: "أدوات الأمان",
        image: "https://source.unsplash.com/random/600x400/?encryption,code",
        btnText: "استكشاف التقنيات",
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
    contents.filter(content => content.isFeatured).forEach((content, index) => {
        const contentElement = document.createElement('div');
        contentElement.className = 'content-card';
        contentElement.style.animationDelay = `${index * 0.1}s`;
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
    contents.filter(content => content.category === "أدوات الأمان").forEach((tool, index) => {
        const toolElement = document.createElement('div');
        toolElement.className = 'content-card';
        toolElement.style.animationDelay = `${index * 0.1}s`;
        toolElement.innerHTML = `
            <img src="${tool.image}" alt="${tool.title}" class="content-img">
            <div class="content-body">
                <h3 class="content-title">${tool.title}</h3>
                <a href="${tool.btnLink}" class="content-btn">${tool.btnText}</a>
            </div>
        `;
        securityToolsContainer.appendChild(toolElement);
    });
}

// تسجيل دخول الأدمن (بدون اسم مستخدم)
function loginAdmin() {
    const password = document.getElementById('admin-password').value;
    
    if (password === '2023') {
        document.getElementById('admin-actions').style.display = 'block';
        document.getElementById('admin-password').value = '';
        
        // إضافة تأثير مرئي
        const adminSection = document.querySelector('.admin-section');
        adminSection.style.background = 'linear-gradient(135deg, #2af598 0%, #08aeea 100%)';
        setTimeout(() => {
            adminSection.style.background = 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)';
        }, 1000);
        
        // رسالة ترحيبية
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'welcome-msg';
        welcomeMsg.textContent = 'مرحبًا بك يا أدمن!';
        document.querySelector('.admin-section').appendChild(welcomeMsg);
        setTimeout(() => welcomeMsg.remove(), 3000);
    } else {
        alert('كلمة السر غير صحيحة!');
        document.getElementById('admin-password').style.border = '2px solid #ff4757';
        setTimeout(() => {
            document.getElementById('admin-password').style.border = '1px solid rgba(255,255,255,0.2)';
        }, 1000);
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
        
        // رسالة نجاح
        const successMsg = document.createElement('div');
        successMsg.className = 'success-msg';
        successMsg.textContent = 'تمت إضافة المحتوى بنجاح!';
        document.getElementById('admin-actions').appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 2000);
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
window.onload = function() {
    displayContents();
    
    // إضافة تأثير تحميل
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
};
