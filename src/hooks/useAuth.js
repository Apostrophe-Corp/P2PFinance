import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'

export const useReach = () => {
    return useContext(AuthContext)
}