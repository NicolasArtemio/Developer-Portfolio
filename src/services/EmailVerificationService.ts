/**
 * Interface representing the response from Abstract IP Geolocation API's Email Verification.
 * Documentation: https://www.abstractapi.com/api/email-verification-validation-api
 */
export interface EmailVerificationResponse {
    email: string;
    autocorrect: string;
    deliverability: 'DELIVERABLE' | 'UNDELIVERABLE' | 'UNKNOWN';
    quality_score: string;
    is_valid_format: {
        value: boolean;
        text: string;
    };
    is_free_email: {
        value: boolean;
        text: string;
    };
    is_disposable_email: {
        value: boolean;
        text: string;
    };
    is_role_email: {
        value: boolean;
        text: string;
    };
    is_catchall_email: {
        value: boolean;
        text: string;
    };
    is_mx_found: {
        value: boolean;
        text: string;
    };
    is_smtp_valid: {
        value: boolean;
        text: string;
    };
}

const ABSTRACT_API_KEY = import.meta.env.VITE_ABSTRACT_API_KEY;
const API_URL = 'https://emailvalidation.abstractapi.com/v1/';

/**
 * Verifies if an email address exists and is deliverable.
 * @param email - The email address to verify.
 * @returns A promise that resolves to true if the email is deliverable, or false otherwise.
 */
export const verifyEmail = async (email: string): Promise<boolean> => {
    if (!ABSTRACT_API_KEY) {
        console.error("Abstract API key is missing. Please add VITE_ABSTRACT_API_KEY to your .env file.");
        // Fallback to true in development or if key is missing to avoid blocking users
        // In production, you might want to handle this differently.
        return true;
    }

    try {
        const response = await fetch(`${API_URL}?api_key=${ABSTRACT_API_KEY}&email=${email}`);

        if (!response.ok) {
            throw new Error(`Email verification failed with status: ${response.status}`);
        }

        const data: EmailVerificationResponse = await response.json();

        // We only allow emails confirmed as 'DELIVERABLE'
        return data.deliverability === 'DELIVERABLE';
    } catch (error) {
        console.error("Error verifying email:", error);
        // If the API fails, we might want to allow the email to go through 
        // to avoid losing a potential lead, but that's a business decision.
        return true;
    }
};
