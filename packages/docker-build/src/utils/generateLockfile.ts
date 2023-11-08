import { Project, Report } from '@yarnpkg/core'
import { Filename, PortablePath, ppath, xfs } from '@yarnpkg/fslib'

export default async function generateLockfile({
  destination,
  project,
  report,
}: {
  destination: PortablePath
  project: Project
  report: Report
}): Promise<void> {
  const filename = Filename.lockfile
  const dest = ppath.join(destination, filename)

  report.reportInfo(null, filename)
  await xfs.mkdirpPromise(ppath.dirname(dest))
  await xfs.writeFilePromise(dest, project.generateLockfile())
}
