exports.postBfhl = async (req, res) => {
  try {
    const { data } = req.body;
    
    console.log(data);

    // Process data
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets
      .filter(char => char.toLowerCase() === char)
      .sort((a, b) => b.localeCompare(a))[0] || [];

    // Process file
    let fileValid = false;
    let fileMimeType = '';
    let fileSizeKb = 0;

    const file_b64 = "BASE_64_STRING"; // Example placeholder
    if (file_b64) {
      fileValid = true;
      fileMimeType = 'image/png'; // Example, replace with actual logic
      fileSizeKb = 400; // Example, replace with actual logic
    }

    const response = {
      is_success: true,
      user_id: "john_doe_17091999", 
      email: "john@xyz.com", 
      roll_number: "ABCD123", 
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
      file_valid: fileValid,
      file_mime_type: fileMimeType,
      file_size_kb: fileSizeKb.toString()
    };

    res.json(response);
  } catch (error) {
    res.status(400).json({ is_success: false, error: error.message });
  }
};
