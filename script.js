function volume_sphere() {
    let radius = Number(document.getElementById('radius').value);
    let volume;

    if (isNaN(radius) || radius < 0 || document.getElementById('radius').value.trim() === "") {
        volume = NaN;
    } else {
        volume = (4 / 3) * Math.PI * radius * radius * radius;
        volume = volume.toFixed(4);
    }

    document.getElementById('volume').value = volume;
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;