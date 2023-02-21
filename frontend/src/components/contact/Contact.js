import React from 'react'
import { motion } from 'framer-motion'
import burger from '../../assets/burger2.png';

const contact = () => {
    return (
        <section className='contact'>
            <motion.form
                initial={{
                    x: '-100vw',
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                transition={{ delay: 0.4 }}
            >
                <h2>Contact Us</h2>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <textarea placeholder='Message...' cols="30" rows="10"></textarea>
                <button type='submit'>Send</button>
            </motion.form>

            <motion.div className='formBorder'>
                <motion.div>
                    <img src={burger} alt='Burger' />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default contact
