import { NextPage } from 'next'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

import { ResetPasswordView } from '@/components/auth/reset-password'
import withNoAuth from '@/utils/withNoAuth'

interface PageProps {
  searchParams: Record<string, string>
}

const ResetPasswordPage: NextPage<PageProps> = ({ searchParams }) => {
  const token = searchParams?.token || null

  if (!token) {
    toast.success('Reset password token is missing. Please try again.')
    redirect('/sign-in')
  }

  return <ResetPasswordView token={token} />
}

export default withNoAuth(ResetPasswordPage)
