import React, { useState } from 'react'

const QrGenerator = () => {
    const [qrData, setQrData] = useState()
    const [sizeOfQR, setSizeOfQR] = useState(250)
    const [qRPrint, setQRPrint] = useState()
    const [qrError, setQrError] = useState()
    const genQR = () => {
        if (!qrData) {
            setQrError("Please Fill text area")
        } else {
            const googleAPI = `https://chart.googleapis.com/chart?cht=qr&chs=${sizeOfQR}&chl=${qrData}`
            setQRPrint(googleAPI)
            setQrError("")
        }
    }
    return <>
        <div className="container">
            <div className="row">
                <h1 className=' text-center my-5'>QR Generator</h1>
                <div className='text-center' id='qrcode'>
                    {
                        (!qrError && qRPrint)
                            ?<>
                               <img style={{ height: 250, width: 250 }} src={qRPrint} alt="" />
                                <p>Scan this to view the results</p>
                            </> 
                            : <h1 className='text-danger'>{qrError}</h1>
                    }
                </div>
                <div className="col-sm-6 offset-3 alert alert-dark my-5">
                    <label for="id" class="form-label">Type text which you have to add In QR</label>
                    <div>
                        <textarea onChange={e => setQrData(e.target.value)} class="form-control" id="id"></textarea>
                        <select class="form-select my-3"
                            onChange={e => setSizeOfQR(e.target.value)}
                        >
                            <option selected>Select Size of QR code</option>
                            <option value="100x100">100 x 100</option>
                            <option value="150x150">150 x 150</option>
                            <option value="200x200">200 x 200</option>
                            <option value="250x250">250 x 250</option>
                            <option value="300x300">300 x 300</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-primary form-control" onClick={genQR}>Generate QR</button>

                </div>
            </div>
        </div>

    </>
}
// Referance = https://developers.google.com/chart/infographics/docs/qr_codes

export default QrGenerator