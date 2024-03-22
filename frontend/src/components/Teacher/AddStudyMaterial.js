import React from 'react';
import { Link, useParams } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';




const baseUrl='http://127.0.0.1:8000/api';
function AddStudyMaterial() {
    const [studyData, setstudyData]=useState({
        title:'',
        description:'',
        upload:'',
        remarks:''
    });


    //Fetch categories after page refresh
    useEffect(()=>{

        // Course title on react page
        document.title='Add Study Materials'
    },[]);




    // Change in Input
    const handleChange=(event)=>{
        setstudyData({
          ...studyData,
          [event.target.name]:event.target.value
        });
    }

    // Change in File Input
    const handleFileChange=(event)=>{
        setstudyData({
            ...studyData,
            [event.target.name]:event.target.files[0]
        });
        
        {/*window.URL = window.URL || window.webkitURL;
        var upload = document.createElement('upload');
        upload.src = URL.createObjectURL(event.target.files[0]);   
        */}

        
    }

    const {course_id}=useParams();

    //Submit Form
    const formSubmit=()=>{
        const _formData=new FormData();
        _formData.append("course",course_id);
        _formData.append("title", studyData.title);
        _formData.append("description", studyData.description);
        _formData.append("upload", studyData.upload,studyData.upload.name);
        _formData.append("remarks", studyData.remarks);
        
        try{
            axios.post(baseUrl+'/study-materials/'+course_id,_formData,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
            .then((res)=>{
                console.log(res.data)

                if (res.status==200||res.status==201){
                    Swal.fire({
                        title: 'Data has been uploaded',
                        icon: 'success',
                        toast: true,
                        timer: 3000,
                        position: 'top-right',
                        timerProgressBar: true,
                        showConfirmButton: false
                    });
                    window.location.reload();
                }
            });
        }
        catch(error){
            console.log(error);
        }

    };
    // End of Submit Form


    const handleSubmit = async e => {   //handleSubmiting of the form
        e.preventDefault()   //Preventpage refresh
    }





    return (
        <div className='container mt-4'>
            <div className='row'>
                <aside className='col-md-3'>
                    <TeacherSidebar/>
                </aside>
                <section className='col-md-9'>
                    <div className='card'>
                        <h5 className='card-header'>Add Study Material</h5>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label for='title' className='form-label'>Title</label>
                                    <input type="text" onChange={handleChange} name='title' id="title" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='description' className='form-label'>Description</label>
                                    <textarea id="description" onChange={handleChange} name='description' className='form-control'></textarea>
                                </div>

                                <div className='mb-3'>
                                    <label for='upload' className='form-label'>Upload</label>
                                    <input type="file" onChange={handleFileChange} name='upload' id="upload" className='form-control'/>
                                </div>

                                <div className='mb-3'>
                                    <label for='remarks' className='form-label'>Remarks</label>
                                    <textarea id="remarks" onChange={handleChange} name='remarks' className='form-control'></textarea>
                                </div>
                                
                                <button type="button" className='btn btn-primary' onClick={formSubmit}>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AddStudyMaterial;