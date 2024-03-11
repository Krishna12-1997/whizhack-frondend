import React from 'react'
import './usecase.css';
import UseCaseForm from '../../inc/UseCaseForm';
import service_banner_icon from "../../images/decors/service_banner_icon.png";
import Loader from '../../inc/Loader';
import useFetch from '../../../hooks/useFetch';

const Use_case = () => {

  const uri = "https://test.whizhack.com/api/use-case?populate=use_case_cards";
  const { loading, error, data } = useFetch(uri);

  if (loading) {
    return <div><Loader loading={loading}/></div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
       <div
        className="usecase-banner-section"
      >
        <img
          src={service_banner_icon}
          alt=""
          className="left-usecase-banner-icon"
        />
        <img
          src={service_banner_icon}
          alt=""
          className="right-usecase-banner-icon"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="usecase-banner-title">
                <h3>{data.attributes.title}</h3>
                <p>{data.attributes.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="policies-section2 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title-left">
                <h4 className='mb-4'>Use Case</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {data.attributes.use_case_cards.data.map((usecase) => (
              <>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="usecase-products-single d-flex flex-column justify-content-center">
                  <div className="products-single-inner">
                    <h5 className="title">{usecase.attributes.title}</h5>
                    <p>{usecase.attributes.description}</p>
                    
                    <a
                      href="/"
                      className="clipped-btns"
                      data-toggle="modal"
                      data-target={`#enquiryModal${usecase.id}`}
                    >
                      Know more
                    </a>
                  </div>
                </div>
              </div>
               <div class="modal fade" id={`enquiryModal${usecase.id}`} role="dialog">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-body">
                     <button type="button" class="close" data-dismiss="modal">
                       &times;
                     </button>
                     <br />
                     <UseCaseForm pdfUrlForm={usecase.attributes.pdf_url}/>
                   </div>
                 </div>
               </div>
             </div>
             </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Use_case;