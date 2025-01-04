import { useEffect } from "react";

import { CustomEase } from "gsap/CustomEase";
import { Flip } from "gsap/Flip";
import { gsap } from "gsap";
import SplitType from "split-type"; // Ensure this is installed via npm

import "../styles/Main.css";

import gloc from "../images/gloc-9.jpg";
import hev from "../images/hev-abi.jpg";
import skusta from "../images/skusta-clee.png";
import zack from "../images/zack-tabudlo.jpg";

gsap.registerPlugin(CustomEase, Flip);

export default function Main() {

  useEffect(() => {
    CustomEase.create(
      "hop",
      "M0,0 C0.355,0.022 0.448,0.079 0.5,0.5 0.542,0.846 0.615,1 1,1"
    );

    CustomEase.create(
      "hop2",
      "M0,0 C0.078,0.617 0.114,0.716 0.255,0.828 0.373,0.922 0.561,1 1,1"
    );

    const splitH2 = new SplitType(".site-info h2", { types: "lines" });

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
    const revealTl = gsap.timeline();
    const scaleTl = gsap.timeline();

    revealTl
      .to(".r-1", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 1.5,
        ease: "hop",
      })
      .to(
        ".r-2",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
          duration: 1.5,
          ease: "hop",
        },
        "<"
      );

    scaleTl.to(".img:first-child", {
      scale: 1,
      duration: 2,
      ease: "power4.inOut",
    });

    const images = document.querySelectorAll(".img:not(:first-child)");
    images.forEach((img, index) => {
      scaleTl.to(
        img,
        {
          opacity: 1,
          scale: 1,
          duration: 1.25,
          ease: "power3.out",
        },
        ">-0.5"
      );
    });

    mainTl
      .add(revealTl)
      .add(scaleTl, "-=1.25")
      .add(() => {
        document.querySelectorAll(".img:not(.main)").forEach((img) => img.remove());

        const state = Flip.getState(".main");
        const imagesContainer = document.querySelector(".images");
        imagesContainer.classList.add("stack-container");

        document.querySelectorAll(".main").forEach((img, i) => {
          img.classList.add("stacked");
          img.style.order = i;
          gsap.set(".img.stacked", {
            clearProps: "transform, top, left",
          });
        });

        Flip.from(state, {
          duration: 2,
          ease: "hop",
          absolute: true,
          stagger: {
            amount: -0.3,
          },
        });
      })
      .to(".word h1, .nav-item p, .line p, .site-info h2 .line span", {
        y: 0,
        duration: 3,
        ease: "hop2",
        stagger: 0.1,
        delay: 1.25,
      })
      .to(
        ".cover-img",
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          duration: 2,
          ease: "hop",
          delay: -4.75,
        });
  }, []); // Runs once after the component mounts

	return (
		<div className="landing-section">  
			<div className="reveals">
        <div className="reveal r-1"></div>
        <div className="reveal r-2"></div>
      </div>

      <div className="images">
        <div className="img main"><img src={gloc} alt="" /></div>
        <div className="img main"><img src={skusta} alt="" /></div>
        <div className="img main"><img src={zack} alt="" /></div>
      </div>

      <div className="hero-content">
        <div className="site-logo">
          <div className="word"><h1>YY Entertainment</h1></div>
          <div className="word"><h1><sup>&copy;</sup></h1></div>
        </div>

        <div className="nav">
          <div class="nav-item"><p>Events</p></div>
          <div class="nav-item"><p>About</p></div>
          <div class="nav-item"><p>Contact</p></div>
          <div class="nav-item"><p>Login</p></div>
        </div>

        <div class="cover-img">
          <div class="event-detail">
            <p>Upcoming Event:</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#303336"><path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"/></svg>
            Purchase Hev Abi Tickets</p>
          </div>
          <img src={hev} alt="" />  
        </div>

        <div class="site-info">
          <div class="row">
            <div class="col">
              <div class="line"><p>Feature Events:</p></div>
            </div>
            <div class="col">
              <h2>
                YY Entertainment brings your favorite artist to your place and make 
                your best event you ever had.
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col"></div>
            <div class="col">
              <div class="address">
                <div class="line"><p>YY Ltd.</p></div>
                <div class="line"><p>Saskatoon Building</p></div>
                <div class="line"><p>- 123 Main Street</p></div>
                <div class="line"><p>S1P 5A9</p></div>
              </div>
              <div class="socials">
                <div class="line"><p>Medias:</p></div>
                <br />
                <div class="line"><p>Facebook</p></div>
                <div class="line"><p>Instagram</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
}