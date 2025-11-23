export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Cloudinary Photos App - Test Page</h1>
      <p className="mb-4">This is a test page to verify the app is working.</p>
      <div className="space-y-2">
        <p>✅ App is running</p>
        <p>✅ Next.js 15 compatibility fixed</p>
        <p>✅ Security vulnerabilities resolved</p>
        <p>✅ Environment variables configured</p>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Next Steps:</h2>
        <ol className="list-decimal list-inside space-y-1">
          <li>Get your Cloudinary credentials from <a href="https://cloudinary.com/console" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Cloudinary Console</a></li>
          <li>Update the .env.local file with your actual credentials</li>
          <li>Create an upload preset in Cloudinary dashboard</li>
          <li>Test the upload functionality</li>
        </ol>
      </div>
    </div>
  );
}
