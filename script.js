import { Application } from '@splinetool/runtime';

// Wait for the DOM content to load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Get a reference to the canvas element
    const canvas = document.getElementById('canvas3d');
    
    // Create a new instance of the Spline Application
    const app = new Application(canvas);
    
    // Load your Spline scene
    app.load('https://prod.spline.design/NCCN76mVOwloE605/scene.splinecode');
});