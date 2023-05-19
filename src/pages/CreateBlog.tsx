import {SyntheticEvent, useState} from "react";
import axios from "axios";

const style = {
    height: "100%"
}

const CreateBlog = () => {

    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [category_id,setCategoryid] = useState('1');

    const [errorText, setErrorText] = useState('');

    const [redirect, setRedirect] = useState(false);

    const submit = async (e:SyntheticEvent) => {
        e.preventDefault();

        const  data = {
            title,
            content,
            category_id
        }
        const res = await axios.post('http://localhost:3000/blogs', data, {withCredentials:true})
        console.log(res);
    }

    return(
        <>
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Insert blog</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="title"
                               onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" id="floatingContent"
                                  placeholder="Input content"
                                  style={style}
                                  rows={10}
                               onChange={(e) => setContent(e.target.value)}>
                        </textarea>
                        <label htmlFor="floatingContent">Input content</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
                    <h2 className="error">{errorText}</h2>
                    <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                </form>
            </main>
        </>
    )
}
export default CreateBlog;