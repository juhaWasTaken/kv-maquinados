'use client'

import { Rajdhani } from "next/font/google";
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { Map } from "./Map";
import { useTranslations } from "next-intl";

const rajdhani = Rajdhani({ subsets: ["latin"], weight: '700' });

const schema = z.object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Dirección de correo electrónico inválida"),
    subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
    phone: z.string().length(10, "El teléfono debe tener al menos 10 caracteres"),
    message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres")
});

type FormFields = z.infer<typeof schema>;

export const ContactForm = () => {
    const t = useTranslations('formContact');
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({resolver: zodResolver(schema), context: {t}});

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    senderName: data.name,
                    senderEmail: data.email,
                    senderSubject: data.subject,
                    senderPhone: data.phone,
                    senderMessage: data.message,
                }),
            });

            if(response.ok) {
                toast.success('Message sent successfully');
            } else {
                const errorData = await response.json(); 
                toast.error(errorData.error || 'Failed to send email');
            }

        } catch (error) {
            toast.error('An error occurred while submitting the form');
            console.error(error);
        }
    }

    return (
        <section className="bg-[#f5f5f5] pt-5 md:pt-10 lg:pt-20">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row">
                <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-11 lg:p-12 bg-white m-4 lg:w-[50%]">
                    <h2 className={`${rajdhani.className} text-[31px] md:text-[38px] lg:text-[46px] mb-3 text-[#13213C]`}>
                        {t('title')}<span className="text-[#ff9302]">.</span>
                    </h2>
                    <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#535353] mb-5">
                        {t('description')}
                    </p>
                    <div className="w-full h-[1px] bg-[#E5E5E5] mb-5"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div className="flex flex-col">
                            <label className={`${rajdhani.className} text-base md:text-[1.063rem] lg:text-lg`}>{t('form.name')}</label>
                            <input
                                {...register('name')}
                                className="bg-[#f5f5f5] px-4 py-2"
                                type="text"
                                placeholder={t('form.name')}
                            />
                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className={`${rajdhani.className} text-base md:text-[1.063rem] lg:text-lg`}>{t('form.email')}</label>
                            <input
                                {...register('email')}
                                className="bg-[#f5f5f5] px-4 py-2"
                                type="email"
                                placeholder={t('form.email')}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div className="flex flex-col">
                            <label className={`${rajdhani.className} text-base md:text-[1.063rem] lg:text-lg`}>{t('form.subject')}</label>
                            <input
                                {...register('subject')}
                                className="bg-[#f5f5f5] px-4 py-2"
                                type="text"
                                placeholder={t('form.subject')}
                            />
                            {errors.subject && <span className="text-red-500 text-sm">{errors.subject.message}</span>}
                        </div>
                        <div className="flex flex-col">
                            <label className={`${rajdhani.className} text-base md:text-[1.063rem] lg:text-lg`}>{t('form.phone')}</label>
                            <input
                                {...register('phone')}
                                className="bg-[#f5f5f5] px-4 py-2"
                                type="text"
                                placeholder={t('form.phone')}
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                        </div>
                    </div>
                    <div className="flex flex-col mb-3">
                        <label className={`${rajdhani.className} text-base md:text-[1.063rem] lg:text-lg`}>{t('form.message')}</label>
                        <textarea
                            {...register('message')}
                            className="bg-[#f5f5f5] px-4 py-2"
                            rows={5}
                            placeholder={t('form.message')}
                        />
                        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
                    </div>
                    <button
                        className={`${rajdhani.className} py-4 px-7 bg-[#ff9302] hover:bg-[#13213C] text-white hover:text-[#ff9302] transition-all text-[1.063rem] ,md:text-lg lg:text-[1.188rem]`}
                        type="submit"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
                <Map />
            </div>
        </section>
    );
};
