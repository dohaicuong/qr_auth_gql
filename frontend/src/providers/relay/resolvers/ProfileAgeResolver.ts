import { graphql } from 'relay-runtime'
import { readFragment } from 'relay-runtime/lib/store/ResolverFragments'

/**
 * @RelayResolver
 *
 * @onType Profile
 * @fieldName age
 * @rootFragment ProfileAgeResolver
 *
 * profile user age
 */
export default function ProfileAgeResolver(profileRef: any): number {
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
