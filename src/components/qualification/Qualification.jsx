import React from 'react'
import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualificaton section">
        <h2 className="section__title">Qualificaton</h2>
        <span className='section__subtitle'>My Personnal Journey</span>


        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Education
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title"></h3>
                            <span className="qualification__subtitle"></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
