import { useState } from "react";
import CreativeButton from "../../atoms/creative-button/CreativeButton";
import IdentityCard from "../../atoms/identity-card/IdentityCard";
import Input from "../../atoms/input/Input";
import Container from "../../container/Container";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const FormGroup = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSendMessage = async () => {
    // Validasi input
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields before sending!",
        confirmButtonColor: "#075985"
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Message sent successfully!",
          confirmButtonColor: "#075985"
        });

        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Failed to send!",
          text: `An error occurred: ${err.text || "Please try again later."}`,
          confirmButtonColor: "#075985"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (label: string, value: string) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <Container>
      <div className="relative z-20 flex flex-col gap-16 md:flex-row md:gap-0 justify-around items-center py-28">
        <div className="flex flex-col gap-16 w-full md:w-[20%]">
          <CreativeButton title="CONTACT" content="CONTACT!" />
          <IdentityCard />
        </div>
        <div className="flex flex-col gap-16 w-full md:w-8/12">
          <Input label="name" value={formData.name} onChange={(value) => handleChange("name", value)} />
          <Input label="email" value={formData.email} onChange={(value) => handleChange("email", value)} />
          <Input label="subject" value={formData.subject} onChange={(value) => handleChange("subject", value)} />
          <Input label="message" value={formData.message} onChange={(value) => handleChange("message", value)} />

          <button className="w-full md:w-1/4" disabled={loading}>
            <CreativeButton onClick={handleSendMessage} title={loading ? "SENDING..." : "SEND"} content={loading ? "SENDING..." : "MESSAGE"} />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default FormGroup;
