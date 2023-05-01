import React from 'react'
import add_icon from "../../../images/add_icon.png"
import edit_icon from "../../../images/edit_icon.png"
import grade_icon from "../../../images/grade_icon.png"
import pdf from "../../../images/pdf.png"
function Uploaded_assing_card() {
    return (
        <div class="card my-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <h6>COP 290- Lab3</h6>
                        <h6>Weightage: 50%</h6>
                    </div>
                    <div class="col-2">
                        <div class="row px-3">
                            <div class="col-3 pt-2">
                                <a type="button" href='/admin/notes/{id}/edit' >
                                    <img src={edit_icon} alt='CAIC' width='20' height='20' />
                                </a>
                            </div>
                            <div class="col-9 pt-2">
                                Edit
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row px-3">
                            <div class="col-3 pt-1">
                                <a type="button" href='/admin/notes/{id}/edit' >
                                    <img src={pdf} alt='CAIC' width='20' height='20' />
                                </a>
                            </div>
                            <div class="col-9 pt-2">
                                PDF
                            </div>


                        </div>
                    </div>
                    <div class="col-2">
                        <div class="row px-3">
                            <div class="col-3 pt-2">
                                <a type="button" href='/admin/notes/{id}/edit' >
                                    <img src={grade_icon} alt='CAIC' width='15' height='15' />
                                </a>
                            </div>
                            <div class="col-9 pt-2">
                                Grade
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Uploaded_assing_card