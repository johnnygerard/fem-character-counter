import { memo } from "react";

export const Noscript = memo(() => {
  return (
    <noscript>
      <div
        style={{
          position: "fixed",
          zIndex: 1000,
          top: 0,
          left: 0,
          transform: "translate(calc(-50% + 50vw), calc(-50% + 50vh))",
          padding: "1rem",
          pointerEvents: "none",
        }}
        role="alert"
      >
        <p
          style={{
            padding: "1rem",
            backgroundColor: "#fff4f4",
            color: "#d32f2f",
            border: "2px solid currentColor",
            borderRadius: "0.5rem",
            textAlign: "center",
            lineHeight: 1.5,
            pointerEvents: "auto",
            maxWidth: "30rem",
          }}
        >
          JavaScript is required for this website to function properly. Please
          ensure that it is supported and enabled in your browser settings.
          <br />
          To learn more, check out{" "}
          <a
            style={{ textDecorationLine: "underline", color: "LinkText" }}
            href="https://enable-javascript.com/"
          >
            How to enable JavaScript in your browser
          </a>
          .
        </p>
      </div>
    </noscript>
  );
});

Noscript.displayName = "Noscript";
