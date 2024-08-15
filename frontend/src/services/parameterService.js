// src/services/parameterService.js
export const API_BASE_URL = "https://fastapiapp-zeta.vercel.app";

export const createParameter = async (type, data) => {
  try {
    console.log("Sending data:", data);
    console.log(`URL: ${API_BASE_URL}/${type}/create`);
    const response = await fetch(`${API_BASE_URL}/${type}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("Server response:", responseData);
      throw new Error(responseData.detail || "Error creating parameter");
    }

    return responseData;
  } catch (error) {
    console.error("Error in createParameter:", error);
    throw error;
  }
};

export const getParameterById = async (type, id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}/${id}`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error fetching parameter");
    }
    return response.json();
  } catch (error) {
    console.error("Error in getParameterById:", error);
    throw error;
  }
};

export const updateParameter = async (type, id, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error updating parameter");
    }
    return response.json();
  } catch (error) {
    console.error("Error in updateParameter:", error);
    throw error;
  }
};

export const deleteParameter = async (type, id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error deleting parameter");
    }
    return response.json();
  } catch (error) {
    console.error("Error in deleteParameter:", error);
    throw error;
  }
};

export const getParameters = async (type) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${type}`);
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") !== -1) {
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Error fetching parameters");
      }
      return response.json();
    } else {
      const text = await response.text();
      throw new Error(
        `Received non-JSON response: ${text.substring(0, 100)}...`
      );
    }
  } catch (error) {
    console.error("Error in getParameters:", error);
    throw error;
  }
};
