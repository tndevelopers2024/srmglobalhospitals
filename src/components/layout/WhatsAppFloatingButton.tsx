"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site";

export default function WhatsAppFloatingButton() {
  const pathname = usePathname();
  const [isElevated, setIsElevated] = useState(false);
  const [footerOffset, setFooterOffset] = useState(0);

  // Generate official WhatsApp URL with prefilled message and verified international number
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappPhone}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefillMessage
  )}`;

  useEffect(() => {
    let ticking = false;

    const checkStickyAndFooter = () => {
      // 1. Detect if any sticky bottom bar or CTA is currently visible
      const stickyBar = document.querySelector<HTMLElement>(".sticky-bar");
      const stickyCta = document.querySelector<HTMLElement>(".sticky-cta");

      const isStickyBarVisible =
        stickyBar?.classList.contains("visible") ?? false;
      const isStickyCtaVisible =
        stickyCta?.classList.contains("show") ||
        stickyCta?.classList.contains("visible") ||
        false;

      setIsElevated(isStickyBarVisible || isStickyCtaVisible);

      // 2. Detect if near footer bottom to avoid overlapping links/copyright
      const footerBottom = document.querySelector<HTMLElement>(".footer-bottom");
      if (footerBottom) {
        const rect = footerBottom.getBoundingClientRect();
        const winH = window.innerHeight;
        if (rect.top < winH) {
          setFooterOffset(Math.max(0, winH - rect.top));
        } else {
          setFooterOffset(0);
        }
      } else {
        setFooterOffset(0);
      }
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          checkStickyAndFooter();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial checks and staggered checks for deferred DOM hydration
    checkStickyAndFooter();
    const t1 = setTimeout(checkStickyAndFooter, 250);
    const t2 = setTimeout(checkStickyAndFooter, 700);

    // Watch for class changes on sticky elements (e.g. .visible toggled by scroll scripts)
    const observer = new MutationObserver(() => {
      checkStickyAndFooter();
    });

    const stickyBar = document.querySelector(".sticky-bar");
    if (stickyBar) {
      observer.observe(stickyBar, { attributes: true, attributeFilter: ["class", "style"] });
    }

    const stickyCta = document.querySelector(".sticky-cta");
    if (stickyCta) {
      observer.observe(stickyCta, { attributes: true, attributeFilter: ["class", "style"] });
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      observer.disconnect();
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  return (
    <aside
      className={`whatsapp-float-container ${isElevated ? "elevated" : ""}`}
      style={{
        transform: footerOffset > 0 ? `translateY(-${footerOffset}px)` : undefined,
      }}
      aria-label="WhatsApp Contact"
    >
      <a
        id="whatsapp-floating-button"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat with us on WhatsApp"
        aria-describedby="whatsapp-float-tooltip"
        title="Chat with us on WhatsApp"
      >
        <span
          id="whatsapp-float-tooltip"
          className="whatsapp-float-tooltip"
          role="tooltip"
        >
          Chat with us on WhatsApp
        </span>

        <span className="whatsapp-float-pulse-ring" aria-hidden="true" />

        <span className="whatsapp-float-icon-wrapper" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="32"
            height="32"
            fill="currentColor"
            focusable="false"
            className="whatsapp-svg-icon"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>
    </aside>
  );
}
