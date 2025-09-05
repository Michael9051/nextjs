'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';


import styles from './ContactForm.module.css'
import { toast} from 'react-hot-toast';



import { ContactFormSchema } from '@/lib/schema';
import { sendEmail } from '@/app/[lang]/api/send/_actions';

export type ContactFormData = z.infer<typeof ContactFormSchema>;


export default function ContactForm() {

    const { 
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
    })

    const processForm: SubmitHandler<ContactFormData> = async (data) => {
        const result = await sendEmail(data);
        // Check if the result is successful
        if (result && result.success) {
            console.log({data: result.data});
            toast.success(`Hey ${data.name}, your message has been sent successfully!`);
            reset();   
            return;
        }

        //toast.error
        console.log(result?.error)
        toast.error('Failed to send message. Please try again later.');
    };

    return (
        <form  
            onSubmit={handleSubmit(processForm)}
            className={styles.contactForm} 
            id="contactForm" 
            data-aos="fade-right" 
            suppressHydrationWarning
        >
            <div>
                <input 
                    placeholder="Name" 
                    required
                    {...register('name', { required: true })}
                />
                {errors.name?.message && (
                    <span className={styles.error}>
                        {errors.name.message}
                    </span>
                )}
            </div>

            <div>
                <input 
                    placeholder="Email" 
                    required
                    {...register('email', { required: true })}
                />
                {errors.email?.message && (
                    <span className={styles.error}>
                        {errors.email.message}
                    </span>
                )}
            </div>

            <div>
                <textarea 
                    placeholder="Message"
                    rows={4}
                    cols={5}
                    required
                    {...register('message', { required: true })}
                />
                {errors.message?.message && (
                    <span className={styles.error}>
                        {errors.message.message}
                    </span>
                )}
            </div>
          
            <button 
                disabled={isSubmitting}
                className="btn btn-primary"  
            >
                {isSubmitting ? 'Sending...' : 'Send'}
            </button>
        </form>
    )
}
