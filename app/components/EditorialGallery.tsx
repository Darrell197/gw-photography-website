export default function EditorialGallery() {
  return (
    <section
      style={{
        padding: "120px 80px",
        backgroundColor: "#050505",
      }}
    >
      <p
        style={{
          color: "#D6C2A1",
          letterSpacing: "8px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Portfolio
      </p>

      <h2
        style={{
          fontSize: "clamp(3rem,6vw,6rem)",
          fontWeight: "300",
          marginBottom: "80px",
          lineHeight: "1",
        }}
      >
        Stories captured
        <br />
        beautifully.
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
        }}
      >
        <img
          src="/images/bride1.JPG"
          alt=""
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }}
        />

        <img
          src="/images/fireman.JPG"
          alt=""
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
            marginTop: "120px",
          }}
        />

        <img
          src="/images/girlsout.JPG"
          alt=""
          style={{
            width: "100%",
            height: "450px",
            objectFit: "cover",
          }}
        />

        <img
          src="/images/blkwhitebride.JPG"
          alt=""
          style={{
            width: "100%",
            height: "700px",
            objectFit: "cover",
          }}
        />
      </div>

      <div style={{ marginTop: "24px" }}>
        <img
          src="/images/babybrides.jpg"
          alt=""
          style={{
            width: "100%",
            height: "500px",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}