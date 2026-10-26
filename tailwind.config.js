export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        space: "#07060d",
        aura: "#8b5cf6",
        neon: "#a855f7",
        surface: "rgba(255,255,255,0.06)"
      },
      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.18)",
        soft: "0 20px 60px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        halo: "radial-gradient(circle at top, rgba(171,0,255,0.14), transparent 30%), radial-gradient(circle at bottom right, rgba(139,92,246,0.18), transparent 24%)"
      }
    }
  },
  plugins: []
}
