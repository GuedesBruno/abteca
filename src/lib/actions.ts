"use server"

export async function submitContactForm(formData: FormData) {
    console.log("Contact form submitted (STATIC MODE)", formData)
    return { success: true }
}

export async function submitAssociateForm(formData: FormData) {
    console.log("Associate form submitted (STATIC MODE)", formData)
    return { success: true }
}
