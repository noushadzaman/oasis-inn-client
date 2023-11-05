
const Faq = () => {
    return (
        <div>
            <div className="w-[60%] mx-auto my-[250px]">
                <div className="join join-vertical">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Q: What time is check-in and check-out?
                        </div>
                        <div className="collapse-content">
                            <p>A: Check-in time is at 3:00 PM, and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Q: Do you offer on-site parking?
                        </div>
                        <div className="collapse-content">
                            <p>A: Yes, we provide complimentary on-site parking for our guests. Our parking facilities are secure and well-maintained.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Q: Is breakfast included in the room rate?
                        </div>
                        <div className="collapse-content">
                            <p>A: Yes, a delicious continental breakfast is included in your room rate. We offer a variety of breakfast options to start your day off right.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            Q: Are pets allowed at the hotel?
                        </div>
                        <div className="collapse-content">
                            <p>A: We are sorry, but we do not allow pets at our hotel. However, we can provide information on nearby pet-friendly accommodations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;