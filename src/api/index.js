import axios from "./axios";

// Example API request
export const fetchData = async (data) => {
  const { age, gender, fitness_level, target_muscle, workout_duration } = data;
  try {
    const url = "https://api.openai.com/v1/chat/completions";
    const jsonData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `
            i am sharing you five data points of mine 
            1. age: ${age}
            2. gender: ${gender}
            3. fitness_level: ${fitness_level}
            4. target_muscle: ${target_muscle}
            5. workout_duration: ${workout_duration}
            
            now with these data points create a workout plan for me divide the workout plan in 3 exercises 
            1. push-ups
            2. Squats
            3. Plank

            in each exercise i want four data points in an object

            name: [exercise_name]
            sets: [no_of_sets]
            repetitions: [no_of_repetitions]
            instructions: [detailed instructions on how to perform the exercise]

            return the response in json format like this
          
            [
              {
                name,
                sets,
                repetitions,
                instructions,
              },
            ];
          `,
        },
      ],
      temperature: 0.7,
    };
    const headers = {
      Authorization: `Bearer ${process.env.REACT_APP_GPT_KEY}`,
      "Content-Type": "application/json",
    };
    let response = await axios.post(url, jsonData, { headers });
    const data = response.data.choices[0].message.content;
    const finalData = JSON.parse(data);
    return finalData;
  } catch (error) {
    // Handle error
  }
};
