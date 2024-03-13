let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * 0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});


// background- https://lh3.googleusercontent.com/drive-viewer/AKGpihbD-NdjNOhWCZKxX_sTXXjBg4QhqpRrbDF9bfxSDLMr5i60wnkhM--zj797HyWx5V_J5Zz8M5pdeb9fLN7zRhos7vfidw=s1600

// gateright- https://lh3.googleusercontent.com/drive-viewer/AKGpihYVPgItldgGwGT_Dj6iTXs0GygPVlWW5cRcfPdhiqDsH0Gz2mXVnIg_ZUGWi86dqZSmhIWG2DyyjuIXm9gBz1X3Q6EhBw=s1600

// treeright- https://lh3.googleusercontent.com/drive-viewer/AKGpihZy605yQelzfDR5RjbgcNAX7x6WSnjd4ZfvjI-wWTmRbuZU6CIq-88Z3qP0y8_7QM4UFX6_K9_dmMZ-rXMl7Wdx6gRPhQ=s1600

// treeleft- https://lh3.googleusercontent.com/drive-viewer/AKGpihbhGr3t1Raa6XkDB3OEsyi1_ZKPAnYYrs3Uv5fMoZ7j-mRAfG6eJa1oGOJPKgND4RGtDM1dUOUEi5un7uXNicjgw8L1Eg=s1600

// grass- https://lh3.googleusercontent.com/drive-viewer/AKGpihaarTzi94SAZjNR1AVZV2Dg51uQSxgLoK7DZOKUysyVJ7C163q77GDSUHv14uQnW_d3WB8BStGJmAENPWHfccaejAxd-Q=s1600

// gateleft- https://lh3.googleusercontent.com/drive-viewer/AKGpihaHl0nAFt-BTJzyKsweBQRSIE0Azc1WwgStoE889Tnx4TRLdRC58j2LdXbi4ZqtZUi1yPzBubTnvi97siNdkSsy0xSwGg=s1600