import { useQuery } from '@tanstack/react-query'

import { errorCatch } from '@/api/api.helper'

import { useAuth } from './useAuth'
import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const { user } = useAuth()

	const { data } = useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data,
		onError: error => {
			console.log(errorCatch(error))
		},
		enabled: !!user
	})

	return { profile: data }
}
