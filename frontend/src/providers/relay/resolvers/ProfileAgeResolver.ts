import { graphql } from 'relay-runtime'
import { readFragment } from 'relay-runtime/lib/store/ResolverFragments'
import { ProfileAgeResolver$key } from './__generated__/ProfileAgeResolver.graphql'

/**
 * @RelayResolver
 *
 * @onType Profile
 * @fieldName age
 * @rootFragment ProfileAgeResolver
 *
 * profile user age
 */
export default function ProfileAgeResolver(profileRef: ProfileAgeResolver$key): number {
  const profile = readFragment(
    graphql`
      fragment ProfileAgeResolver on Profile {
        dob
      }
    `,
    profileRef
  )

  return new Date().getFullYear() - new Date(profile.dob).getFullYear()
}
