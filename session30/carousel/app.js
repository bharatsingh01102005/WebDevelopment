let arr = [
    'https://images.unsplash.com/photo-1730914957701-5cacfaa77e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1753903770752-2958349862f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
    'https://images.unsplash.com/photo-1730914957701-5cacfaa77e89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
    'https://plus.unsplash.com/premium_photo-1753362738451-5c27dc72165d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1752801716800-3d936e5e4a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dHJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'
];
let img = document.querySelector('img');
let n = 0;
setInterval(() => {
    img.setAttribute('src', arr[n]);
    n = (n + 1) % arr.length;
}, 3000);
