// // "use client";

// // import { useState, type ChangeEvent, type FormEvent } from "react";
// // import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
// // import { EMAIL_ADDRESS, SOCIAL_LINKS, cn } from "@/lib/utils";
// // import { GithubIcon, LinkedinIcon } from "./Icons";

// // type Status = "idle" | "sending" | "success" | "error";

// // interface FormValues {
// //   name: string;
// //   email: string;
// //   message: string;
// // }

// // type FormErrors = Partial<Record<keyof FormValues, string>>;

// // const EMPTY: FormValues = { name: "", email: "", message: "" };

// // function validate(values: FormValues): FormErrors {
// //   const errors: FormErrors = {};
// //   if (!values.name.trim()) errors.name = "Enter your name.";
// //   if (!values.email.trim()) errors.email = "Enter your email address.";
// //   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
// //     errors.email = "Enter a valid email address, like name@example.com.";
// //   if (values.message.trim().length < 10)
// //     errors.message = "Write at least 10 characters.";
// //   return errors;
// // }

// // const fieldClass =
// //   "w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-cyan-400/60";

// // export default function Contact() {
// //   const [values, setValues] = useState<FormValues>(EMPTY);
// //   const [errors, setErrors] = useState<FormErrors>({});
// //   const [status, setStatus] = useState<Status>("idle");

// //   function handleChange(
// //     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
// //   ) {
// //     const { name, value } = e.target;
// //     setValues((prev) => ({ ...prev, [name]: value }));
// //     if (errors[name as keyof FormValues]) {
// //       setErrors((prev) => ({ ...prev, [name]: undefined }));
// //     }
// //     if (status === "success" || status === "error") setStatus("idle");
// //   }

// //   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
// //     e.preventDefault();
// //     const found = validate(values);
// //     setErrors(found);
// //     if (Object.keys(found).length > 0) return;

// //     setStatus("sending");
// //     try {
// //       // Replace this block with a real request, for example:
// //       // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
// //       await new Promise((resolve) => setTimeout(resolve, 1200));
// //       setStatus("success");
// //       setValues(EMPTY);
// //     } catch {
// //       setStatus("error");
// //     }
// //   }

// //   const sending = status === "sending";

// //   return (
// //     <section id="contact" className="px-4 py-20 sm:px-6">
// //       <div className="mx-auto max-w-6xl">
// //         <div className="max-w-2xl">
// //           <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
// //             Let&apos;s work together
// //           </h2>
// //           <p className="mt-3 text-zinc-400">
// //             Tell me about your project and I&apos;ll reply as soon as I can.
// //           </p>
// //         </div>

// //         <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
// //           <div className="space-y-4">
// //             <a
// //               href={SOCIAL_LINKS.email}
// //               className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
// //             >
// //               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
// //                 <Mail className="h-5 w-5" />
// //               </span>
// //               <span>
// //                 <span className="block text-sm text-zinc-500">Email</span>
// //                 <span className="text-white">{EMAIL_ADDRESS}</span>
// //               </span>
// //             </a>
// //             <a
// //               href={SOCIAL_LINKS.github}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
// //             >
// //               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
// //                 <GithubIcon className="h-5 w-5" />
// //               </span>
// //               <span>
// //                 <span className="block text-sm text-zinc-500">GitHub</span>
// //                 <span className="text-white">github.com</span>
// //               </span>
// //             </a>
// //             <a
// //               href={SOCIAL_LINKS.linkedin}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
// //             >
// //               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
// //                 <LinkedinIcon className="h-5 w-5" />
// //               </span>
// //               <span>
// //                 <span className="block text-sm text-zinc-500">LinkedIn</span>
// //                 <span className="text-white">linkedin.com</span>
// //               </span>
// //             </a>
// //           </div>

// //           <form
// //             onSubmit={handleSubmit}
// //             noValidate
// //             className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 backdrop-blur sm:p-8"
// //           >
// //             <div>
// //               <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
// //                 Name
// //               </label>
// //               <input
// //                 id="name"
// //                 name="name"
// //                 type="text"
// //                 autoComplete="name"
// //                 value={values.name}
// //                 onChange={handleChange}
// //                 disabled={sending}
// //                 aria-invalid={Boolean(errors.name)}
// //                 aria-describedby={errors.name ? "name-error" : undefined}
// //                 placeholder="Your name"
// //                 className={cn(fieldClass, errors.name && "border-rose-400/60")}
// //               />
// //               {errors.name && (
// //                 <p id="name-error" className="mt-1.5 text-sm text-rose-300">
// //                   {errors.name}
// //                 </p>
// //               )}
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
// //                 Email
// //               </label>
// //               <input
// //                 id="email"
// //                 name="email"
// //                 type="email"
// //                 autoComplete="email"
// //                 value={values.email}
// //                 onChange={handleChange}
// //                 disabled={sending}
// //                 aria-invalid={Boolean(errors.email)}
// //                 aria-describedby={errors.email ? "email-error" : undefined}
// //                 placeholder="name@example.com"
// //                 className={cn(fieldClass, errors.email && "border-rose-400/60")}
// //               />
// //               {errors.email && (
// //                 <p id="email-error" className="mt-1.5 text-sm text-rose-300">
// //                   {errors.email}
// //                 </p>
// //               )}
// //             </div>

// //             <div>
// //               <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
// //                 Message
// //               </label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 rows={5}
// //                 value={values.message}
// //                 onChange={handleChange}
// //                 disabled={sending}
// //                 aria-invalid={Boolean(errors.message)}
// //                 aria-describedby={errors.message ? "message-error" : undefined}
// //                 placeholder="What are you building?"
// //                 className={cn(
// //                   fieldClass,
// //                   "resize-y",
// //                   errors.message && "border-rose-400/60",
// //                 )}
// //               />
// //               {errors.message && (
// //                 <p id="message-error" className="mt-1.5 text-sm text-rose-300">
// //                   {errors.message}
// //                 </p>
// //               )}
// //             </div>

// //             <button
// //               type="submit"
// //               disabled={sending}
// //               className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-medium text-onyx transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
// //             >
// //               {sending ? (
// //                 <>
// //                   <Loader2 className="h-4 w-4 animate-spin" />
// //                   Sending
// //                 </>
// //               ) : (
// //                 <>
// //                   <Send className="h-4 w-4" />
// //                   Send message
// //                 </>
// //               )}
// //             </button>

// //             <div aria-live="polite" role="status">
// //               {status === "success" && (
// //                 <p className="flex items-center gap-2 text-sm text-cyan-300">
// //                   <CheckCircle2 className="h-4 w-4" />
// //                   Message sent. I&apos;ll get back to you soon.
// //                 </p>
// //               )}
// //               {status === "error" && (
// //                 <p className="flex items-center gap-2 text-sm text-rose-300">
// //                   <AlertCircle className="h-4 w-4" />
// //                   The message didn&apos;t send. Try again, or email me directly.
// //                 </p>
// //               )}
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }






// "use client";

// import { useState, type ChangeEvent, type FormEvent } from "react";
// import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
// import { EMAIL_ADDRESS, SOCIAL_LINKS, cn } from "@/lib/utils";
// import { GithubIcon, LinkedinIcon } from "./Icons";

// type Status = "idle" | "sending" | "success" | "error";

// interface FormValues {
//   name: string;
//   email: string;
//   message: string;
// }

// type FormErrors = Partial<Record<keyof FormValues, string>>;

// const EMPTY: FormValues = { name: "", email: "", message: "" };

// function validate(values: FormValues): FormErrors {
//   const errors: FormErrors = {};
//   if (!values.name.trim()) errors.name = "Enter your name.";
//   if (!values.email.trim()) errors.email = "Enter your email address.";
//   else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
//     errors.email = "Enter a valid email address, like name@example.com.";
//   if (values.message.trim().length < 10)
//     errors.message = "Write at least 10 characters.";
//   return errors;
// }

// const fieldClass =
//   "w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-cyan-400/60";

// export default function Contact() {
//   const [values, setValues] = useState<FormValues>(EMPTY);
//   const [errors, setErrors] = useState<FormErrors>({});
//   const [status, setStatus] = useState<Status>("idle");

//   function handleChange(
//     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) {
//     const { name, value } = e.target;
//     setValues((prev) => ({ ...prev, [name]: value }));
//     if (errors[name as keyof FormValues]) {
//       setErrors((prev) => ({ ...prev, [name]: undefined }));
//     }
//     if (status === "success" || status === "error") setStatus("idle");
//   }

//   async function handleSubmit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const found = validate(values);
//     setErrors(found);
//     if (Object.keys(found).length > 0) return;

//     setStatus("sending");
//     try {
//       // Replace this block with a real request, for example:
//       // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
//       await new Promise((resolve) => setTimeout(resolve, 1200));
//       setStatus("success");
//       setValues(EMPTY);
//     } catch {
//       setStatus("error");
//     }
//   }

//   const sending = status === "sending";

//   return (
//     <section id="contact" className="px-4 py-20 sm:px-6">
//       <div className="mx-auto max-w-6xl">
//         <div className="max-w-2xl">
//           <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
//             Let&apos;s work together
//           </h2>
//           <p className="mt-3 text-zinc-400">
//             Tell me about your project and I&apos;ll reply as soon as I can.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
//           <div className="space-y-4">
//             <a
//               href={SOCIAL_LINKS.email}
//               className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
//                 <Mail className="h-5 w-5" />
//               </span>
//               <span>
//                 <span className="block text-sm text-zinc-500">Email</span>
//                 <span className="text-white">ahmadibraheem680@gmail.com</span>
//               </span>
//             </a>
//             <a
//               href={SOCIAL_LINKS.github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
//                 <GithubIcon className="h-5 w-5" />
//               </span>
//               <span>
//                 <span className="block text-sm text-zinc-500">GitHub</span>
//                 <span className="text-white">github.com/ahmadibraheem555</span>
//               </span>
//             </a>
//             <a
//               href={SOCIAL_LINKS.linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
//             >
//               <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
//                 <LinkedinIcon className="h-5 w-5" />
//               </span>
//               <span>
//                 <span className="block text-sm text-zinc-500">LinkedIn</span>
//                 <span className="text-white">linkedin.com/in/ahmad-ibraheem-dev</span>
//               </span>
//             </a>
//           </div>

//           <form
//             onSubmit={handleSubmit}
//             noValidate
//             className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8"
//           >
//             <div>
//               <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 autoComplete="name"
//                 value={values.name}
//                 onChange={handleChange}
//                 disabled={sending}
//                 aria-invalid={Boolean(errors.name)}
//                 aria-describedby={errors.name ? "name-error" : undefined}
//                 placeholder="Your name"
//                 className={cn(fieldClass, errors.name && "border-rose-400/60")}
//               />
//               {errors.name && (
//                 <p id="name-error" className="mt-1.5 text-sm text-rose-300">
//                   {errors.name}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 value={values.email}
//                 onChange={handleChange}
//                 disabled={sending}
//                 aria-invalid={Boolean(errors.email)}
//                 aria-describedby={errors.email ? "email-error" : undefined}
//                 placeholder="name@example.com"
//                 className={cn(fieldClass, errors.email && "border-rose-400/60")}
//               />
//               {errors.email && (
//                 <p id="email-error" className="mt-1.5 text-sm text-rose-300">
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             <div>
//               <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 name="message"
//                 rows={5}
//                 value={values.message}
//                 onChange={handleChange}
//                 disabled={sending}
//                 aria-invalid={Boolean(errors.message)}
//                 aria-describedby={errors.message ? "message-error" : undefined}
//                 placeholder="What are you building?"
//                 className={cn(
//                   fieldClass,
//                   "resize-y",
//                   errors.message && "border-rose-400/60",
//                 )}
//               />
//               {errors.message && (
//                 <p id="message-error" className="mt-1.5 text-sm text-rose-300">
//                   {errors.message}
//                 </p>
//               )}
//             </div>

//             <button
//               type="submit"
//               disabled={sending}
//               className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-medium text-onyx transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
//             >
//               {sending ? (
//                 <>
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                   Sending
//                 </>
//               ) : (
//                 <>
//                   <Send className="h-4 w-4" />
//                   Send message
//                 </>
//               )}
//             </button>

//             <div aria-live="polite" role="status">
//               {status === "success" && (
//                 <p className="flex items-center gap-2 text-sm text-cyan-300">
//                   <CheckCircle2 className="h-4 w-4" />
//                   Message sent. I&apos;ll get back to you soon.
//                 </p>
//               )}
//               {status === "error" && (
//                 <p className="flex items-center gap-2 text-sm text-rose-300">
//                   <AlertCircle className="h-4 w-4" />
//                   The message didn&apos;t send. Try again, or email me directly.
//                 </p>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon } from "./Icons";

type Status = "idle" | "sending" | "success" | "error";

// Free contact-form backend. Get your access key at https://web3forms.com
// (enter your email and the key is sent to your inbox), then paste it below.
// The key is meant to be public, so it is safe to keep in client code.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY = "be5ae905-13b3-4f80-90ab-6cb89649f811";

const CONTACT = {
  email: "ahmadibraheem680@gmail.com",
  mailto: "mailto:ahmadibraheem680@gmail.com",
  github: "https://github.com/ahmadibraheem555",
  linkedin: "https://www.linkedin.com/in/ahmad-ibraheem-dev",
} as const;

interface FormValues {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const EMPTY: FormValues = { name: "", email: "", message: "" };

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = "Enter a valid email address, like name@example.com.";
  if (values.message.trim().length < 10)
    errors.message = "Write at least 10 characters.";
  return errors;
}

const fieldClass =
  "w-full rounded-xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-white placeholder:text-zinc-600 transition-colors focus:border-cyan-400/60";

export default function Contact() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [botcheck, setBotcheck] = useState(false); // honeypot, real users never tick it

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === "success" || status === "error") setStatus("idle");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    if (botcheck) return;

    setErrorMessage("");

   if (WEB3FORMS_ACCESS_KEY.startsWith("YOUR_")) {
      setErrorMessage(
        "The contact form isn't connected yet. Add your Web3Forms access key in Contact.tsx.",
      );
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New message from ${values.name} via Dev.Ahmad portfolio`,
          from_name: "Dev.Ahmad Portfolio",
          name: values.name,
          email: values.email,
          message: values.message,
          
        }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        setValues(EMPTY);
      } else {
        setErrorMessage(
          typeof result.message === "string" && result.message
            ? result.message
            : "Something went wrong while sending your message.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Network error. Check your connection and try again, or email me directly.",
      );
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-zinc-400">
            Tell me about your project and I&apos;ll reply as soon as I can.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <a
              href={CONTACT.mailto}
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Mail className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">Email</span>
                <span className="text-white">{CONTACT.email}</span>
              </span>
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <GithubIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">GitHub</span>
                <span className="text-white">github.com/ahmadibraheem555</span>
              </span>
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-5 transition-colors hover:border-cyan-400/30"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <LinkedinIcon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm text-zinc-500">LinkedIn</span>
                <span className="text-white">linkedin.com/in/ahmad-ibraheem-dev</span>
              </span>
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={handleChange}
                disabled={sending}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
                className={cn(fieldClass, errors.name && "border-rose-400/60")}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-rose-300">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={handleChange}
                disabled={sending}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="name@example.com"
                className={cn(fieldClass, errors.email && "border-rose-400/60")}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-rose-300">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                disabled={sending}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                placeholder="What are you building?"
                className={cn(
                  fieldClass,
                  "resize-y",
                  errors.message && "border-rose-400/60",
                )}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-rose-300">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Honeypot field for Web3Forms spam protection (hidden from users) */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              checked={botcheck}
              onChange={(e) => setBotcheck(e.target.checked)}
            />

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-medium text-onyx transition-colors hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {sending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            <div aria-live="polite" role="status">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-cyan-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-rose-300">
                  <AlertCircle className="h-4 w-4" />
                  {errorMessage || "The message didn't send. Try again, or email me directly."}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
