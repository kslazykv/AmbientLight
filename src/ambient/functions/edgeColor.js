export function edgeColor() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const img = document.getElementById("image");
    
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imageData.data;
    
    let count = 0
    const rgb = { r: 0, g: 0, b: 0 };
    const length = imageData.data.length;
    
    for (var i = 0; i < length; i += 4) {
        rgb.r += imageData.data[i];
        rgb.g += imageData.data[i + 1];
        rgb.b += imageData.data[i + 2];
        count++;
    }
    
    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);
    
    // Triangle 1 (top-left)
    let r1 = 0;
    let g1 = 0;
    let b1 = 0;
    let count1 = 0;
    
    for (let x = 0; x < canvas.width / 2; x++) {
        for (let y = 0; y < canvas.height / 2; y++) {
        const index = (y * imageData.width + x) * 4;
        r1 += pixels[index];
        g1 += pixels[index + 1];
        b1 += pixels[index + 2];
        count1++;
      }
    }
    
    const avgR1 = Math.round(r1 / count1);
    const avgG1 = Math.round(g1 / count1);
    const avgB1 = Math.round(b1 / count1);
    
    // Triangle 2 (top-right)
    let r2 = 0;
    let g2 = 0;
    let b2 = 0;
    let count2 = 0;
    
    for (let x = canvas.width / 2; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height / 2; y++) {
        const index = (y * imageData.width + x) * 4;
        r2 += pixels[index];
        g2 += pixels[index + 1];
        b2 += pixels[index + 2];
        count2++;
      }
    }
    
    const avgR2 = Math.round(r2 / count2);
    const avgG2 = Math.round(g2 / count2);
    const avgB2 = Math.round(b2 / count2);
    
    // Triangle 3 (bottom-left)
    let r3 = 0;
    let g3 = 0;
    let b3 = 0;
    let count3 = 0;
    
    for (let x = 0; x < canvas.width / 2; x++) {
        for (let y = canvas.height / 2; y < canvas.height; y++) {
        const index = (y * imageData.width + x) * 4;
        r3 += pixels[index];
        g3 += pixels[index + 1];
        b3 += pixels[index + 2];
        count3++;
      }
    }
    
    const avgR3 = Math.round(r3 / count3);
    const avgG3 = Math.round(g3 / count3);
    const avgB3 = Math.round(b3 / count3);
    
    // Triangle 4 (bottom-right)
    let r4 = 0;
    let g4 = 0;
    let b4 = 0;
    let count4 = 0;
    
    for (let x = canvas.width / 2; x < canvas.width-1; x++) {
        for (let y = canvas.height / 2; y < canvas.height-1; y++) {
            const index = (y * imageData.width + x) * 4;
            r4 += pixels[index];
            g4 += pixels[index + 1];
            b4 += pixels[index + 2];
            count4++;
        }
    }
        
    const avgR4 = Math.round(r4 / count4);
    const avgG4 = Math.round(g4 / count4);
    const avgB4 = Math.round(b4 / count4);
    
    const RGB1 = [avgR1,avgG1,avgB1]
    const RGB2 = [avgR2,avgG2,avgB2]
    const RGB3 = [avgR3,avgG3,avgB3]
    const RGB4 = [avgR4,avgG4,avgB4]
    
    const AVR = [RGB1,RGB2,RGB3,RGB4]
     
    return AVR
    }
    