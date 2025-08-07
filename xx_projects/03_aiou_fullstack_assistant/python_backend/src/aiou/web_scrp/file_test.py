import subprocess

# Define the CURL command
curl_command = [
    'curl',
    '-X', 'GET',
    '-H', 'Authorization: Bearer YOUR_OPENAI_KEY',
    'https://api.openai.com/v1/files'
]

# Execute the cURL command
process = subprocess.Popen(curl_command, stdout=subprocess.PIPE)

# Get the output of the command
output, error = process.communicate()

# Print the output
print(output.decode('utf-8'))
