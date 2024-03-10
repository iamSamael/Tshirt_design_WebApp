import React from "react";
import CustomButton from './CustomButton.jsx'
const AIPicker = ({prompt, setPrompt, generatingImg, handleSubmit}) => {
    return(
        <div className="aipicker-container">
            <textarea
                placeholder="ask me..."
                rows = {5}
                value = {prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="aipicker-textarea"
            />
            <div className="flex flex-wrap gap-3">
                {generatingImg ? (
                    <CustomButton
                        type="outline"
                        title="asking AI..."
                        customStyles="text-xs"/>

                ) : (
                    <>
                        <CustomButton
                            type="outline"
                            title="AI LOGO"
                            handleClick={() => handleSubmit('logo')}
                            customStyles="text-xs"/>

                        <CustomButton
                            type="filled"
                            title="AI FULL"
                            handleClick={() => handleSubmit('full')}
                            customStyles="text-xs"/>

                    </>
                )}

            </div>
        </div>
    )
}

export default AIPicker