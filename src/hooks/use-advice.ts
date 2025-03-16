import { useState, useEffect } from 'react';
import AdviceService from '../services/advice';

const useAdvice = () => {
    const [advice, setAdvice] = useState(null);
    const [loadingAdvice, setLoadingAdvice] = useState(true);
    const [errorAdvice, setErrorAdvice] = useState(null);

    const fetchAdvice = async () => {
        setLoadingAdvice(true);
        try {
            const slip = await AdviceService.getRandomAdvice();
            setAdvice(slip);
            setLoadingAdvice(false);
        } catch (error) {
            setErrorAdvice(error);
            setLoadingAdvice(false);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return { advice, loadingAdvice, errorAdvice, refetchAdvice: fetchAdvice };
};

export default useAdvice;
