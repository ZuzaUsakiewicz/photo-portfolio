import {
  ContactForm,
  Label,
  Input,
  SendButton,
} from "./styles/HomeContactSection.styled";

export const HomeContactSection = () => {
  return (
    <ContactForm>
      {/*
      Future addition:
      https://www.emailjs.com/docs/examples/reactjs/  
        <form ref={form} onSubmit={sendEmail}>
        */}
      <Label>Name</Label>
      <Input type="text" name="user_name" />
      <Label>Email</Label>
      <Input type="email" name="user_email" />
      <Label>Message</Label>
      <textarea name="message" />
      <SendButton type="submit" value="Send" />
      <span>Contact me</span>
    </ContactForm>
  );
};
