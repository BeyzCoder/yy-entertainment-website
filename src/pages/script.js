document.addEventListener("DOMContentLoaded", () => {
    CustomEase.create(
        "hop",
        "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    );

    CustomEase.create(
        "hop2",
        "M0,0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561,1 1,1"
    );

    const splitH2 = new SplitType(".site-info h2", {
        types: "lines",
    });

    splitH2.lines.forEach((line) => {
        const text = line.textContent;
        const wrapper = document.createElement("div");
        wrapper.className = "line";
        const span = document.createElement("span");
        span.textContent = text;
        wrapper.appendChild(span);
        line.parentNode.replaceChild(wrapper, line);
    });

    const mainTl = gsap.timeline();
})