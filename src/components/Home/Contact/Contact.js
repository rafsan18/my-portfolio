import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <section class="contact">
            <h1 className="text-center text-brand" id="contact">
                Contact
            </h1>
            <div class="section-center clearfix">
                {/* <!-- contact info --> */}
                <article class="contact-info">
                    <div class="contact-item">
                        <h3 class="contact-title">
                            <span class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </span>
                            email
                        </h3>
                        <h3 class="contact-text">rafsan.ie.du@gmail.com</h3>
                    </div>
                    {/* <!-- end of contact item --> */}
                    {/* <!-- contact item --> */}
                    <div class="contact-item">
                        <h3 class="contact-title">
                            <span class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </span>
                            phone
                        </h3>
                        <h3 class="contact-text">+ 880 19122 13166</h3>
                    </div>
                    {/* <!-- end of contact item --> */}
                </article>
                {/* <!-- contact form --> */}
                <article class="contact-form">
                    <form
                        action="https://formspree.io/f/xoqpwwzb"
                        method="POST"
                        class="form-group"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="name"
                            class="form-control"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            class="form-control"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            class="form-control"
                            placeholder="message"
                        ></textarea>
                        <button type="submit" class="submit-btn">
                            send
                        </button>
                    </form>
                </article>
            </div>
        </section>
    );
};

export default Contact;
