// import validator from 'validator';

export default function EmailForm() {
    // const serverUrl = `http://localhost:443/`; // @TODO: detect localhost vs live servers and swap
    async function validateForm(e) {
        e.preventDefault();
        // const formData = {};
        // for (const elKey of e.target.elements) {
        //     const val = elKey.value.trim()
        //     formData[elKey.name] = (elKey.name === 'emailMessage') ? validator.escape(val) : val;
        // }
        // console.log(`formData = `, formData);
        // if (validator.isEmail(formData.senderEmail) && (formData.productId.length < 1 || formData.productId === undefined)) {
        //     // send to php endpoint
        //     console.log(`yay we're valid`);
        //     axios
        //         .post(serverUrl, formData)
        //         .then((response) => {
        //             console.log(`axios response = `, response);
        //             setPost(response.data);
        //         });
        // }

        return;
    }
    return (
        <form id="contact-form" action="" onSubmit={validateForm}>
            <div className="mb-3">
                <label htmlFor="senderEmail" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="senderEmail" name="senderEmail" placeholder="name@example.com" required />
            </div>
            <div className="chameleon">
                <label htmlFor="productId" className="form-label">Product ID</label>
                <input type="text" className="form-control" id="productId" name="productId" placeholder="Don't fill this out unless you're a bot." />
            </div>
            <div className="mb-3">
                <label htmlFor="emailMessage" className="form-label">Message</label>
                <textarea className="form-control" id="emailMessage" name="emailMessage" rows="5"></textarea>
            </div>
            <div className="mb-3">
                <button className="btn btn-primary" type="submit">Send</button>
            </div>
        </form>
    );
}