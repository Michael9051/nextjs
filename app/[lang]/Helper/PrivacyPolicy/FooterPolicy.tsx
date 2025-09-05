"use client"
import React, { useState } from 'react'
import Footer from '@/app/[lang]/components/Home/Footer/Footer'
import PrivacyPolicy from '@/app/[lang]/Helper/PrivacyPolicy/PrivacyPolicy'

const FooterPolicy = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
    setShowModal(!showModal);
    };
    
    return (
    <div>
        <Footer handleShowModal={handleShowModal} />
        { showModal && <PrivacyPolicy  handleShowModal={handleShowModal} /> }
    </div>
    )
}

export default FooterPolicy