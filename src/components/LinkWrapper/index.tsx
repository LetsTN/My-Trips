import Link from 'next/link'
import * as S from './styles'
import { LinkWrapperProps } from './types'

const LinkWrapper = ({ children, href }: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

export default LinkWrapper
