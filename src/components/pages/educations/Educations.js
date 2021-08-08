import React,{Component } from 'react'

export default class Educations extends Component{
    render(){
        return(
            <div>
                  <div className="card z-depth-0">
                    <div className="card-content">
                        <h6>
                            <strong>
                                <i className="fas fa-graduation-cap"></i> EDUCATION
                            </strong>
                        </h6>
                        <hr/>
                        <div className="row mt">
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>BACHELOR OF COMPUTER SCIENCE</strong>
                                        <span>2014 - 2017</span>
                                    </h6>
                                    <p className="pt">
                                    Graduated from Multimedia University (Cyberjaya Campus) with First Class Honours and CGPA of 3.75. <br/>
                                    Active in club activities such as Japanese Cultural Society and served the position of Vice-President in my last year.
                                    I successfully managed to enter the Dean’s List for several counts and finally received a state award by the Penang state government.
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>DIPLOMA IN INFORMATION TECHNOLOGY</strong>
                                        <span>2011 - 2013</span>
                                    </h6>
                                    <p className="pt">
                                    Graduated from Olympia College (Penang Branch) with CGPA of 3.94. <br/>
                                    I actively participated in club activities and was elected as Student Council President on my final year.
                                    When I graduated, I was happy to had received a college award for outstanding performance.
                                    </p>
                                </blockquote>
                            </div>
                            <div className="col s12">
                                <blockquote>
                                    <h6 className="no-pad mt-bottom">
                                        <strong>O Level Certification</strong>
                                        <span>2006 - 2010</span>
                                    </h6>
                                    <p className="pt">
                                        I have completed my O-Level certification after attending SMK ST.Xavier's Institution, an English Missionary high school located in Penang, Malaysia.
                                        This certification is locally known as Sijil Pelajaran Malaysia (SPM).
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}