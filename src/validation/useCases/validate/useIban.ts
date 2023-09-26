import { useQuery } from '@tanstack/react-query';
import { createIbanValidationApiAdapter } from '../../api/ValidationApiService';


export function useIban(iban: string) {

    return useQuery(['validation', iban], createIbanValidationApiAdapter(iban), {
        enabled: Boolean(iban),
        retry: false,
    });
}
