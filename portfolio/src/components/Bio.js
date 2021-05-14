import React from "react";

function Bio (props) {
  return (
    <div className="container">
        <section id="main-bio">

            <div className="container mb-5">

                <div className="row">

                    <div className="col-6">
                        <img className="img-fluid" src="images/personal-photo.JPEG" alt="Responsive" id="profile" size="100px" />
                    </div>

                    <div className="col-6">
                        <p>
                        I have always worked in jobs and careers that involved customer service and hospitality. I am currently enrolled in a coding bootcamp through UNC Chapel Hill to learn how to become a full stack developer. I aspire to take what I know from the hospitality and service industry and apply it to the web developing world. I have experience engaging with a wide range of people and love finding solutions to new problems. I love any kind of puzzle and look forward to designing my own code and building something beautiful. I am very detail oriented and work well under pressure while handling multiple tasks at once and accepting change as it happens. I have been a cashier at one of the busiest fast-food restaurants at Disneyland during peak season. I have been a flight attendant stranded for days during storms and working through cancellations and rerouting. But most recently, I have been a stay-at-home-mother to a toddler and a newborn during a global pandemic.</p>
                    </div>

                </div>
            </div>

        </section>
    </div>
  );
}

export default Bio;


