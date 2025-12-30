import java.io.File
import java.io.FileInputStream
import java.util.*

plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    // The Flutter Gradle Plugin must be applied after the Android and Kotlin Gradle plugins.
    id("dev.flutter.flutter-gradle-plugin")
}

// Define the helper extension function
fun Properties.getRequiredProperty(key: String): String {
    return getProperty(key) ?: throw IllegalArgumentException("'$key' not found in keystore.properties file.")
}

// Create an empty Properties object
val keyProperties = Properties()
val propertiesFile = File("keystore.properties")

var detStoreFile: String? = null
var detStorePassword: String? = null
var detKeyAlias: String? = null
var detKeyPassword: String? = null

// Check if the properties file exists before doing anything else
if (propertiesFile.exists()) {
    println("Info: keystore.properties found. Loading signing information.")

    // Load the file's contents into the properties object
    keyProperties.load(FileInputStream(propertiesFile))

    // get the required properties. This code only runs if the file exists.
    detKeyAlias = keyProperties.getRequiredProperty("keyAlias")
    detKeyPassword = keyProperties.getRequiredProperty("keyPassword")
    detStoreFile = keyProperties.getRequiredProperty("storeFile")
    detStorePassword = keyProperties.getRequiredProperty("storePassword")

} else {
    // This message will now appear when building without the file
    println("Warning: keystore.properties not found. Skipping release signing configuration.")
}

android {
    namespace = "com.moazsalem.freud.ai"
    compileSdk = flutter.compileSdkVersion
    ndkVersion = flutter.ndkVersion

    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_11
        targetCompatibility = JavaVersion.VERSION_11
    }

    kotlinOptions {
        jvmTarget = "11"
    }

    defaultConfig {
        applicationId = "com.moazsalem.freud.ai"
        minSdk = flutter.minSdkVersion
        targetSdk = flutter.targetSdkVersion
        versionCode = flutter.versionCode
        versionName = flutter.versionName
    }

    signingConfigs {
        create("release") {
            if (detStoreFile != null) {
                storeFile = file(detStoreFile!!)
                storePassword = detStorePassword
                keyAlias = detKeyAlias
                keyPassword = detKeyPassword
            }
        }
    }

    buildTypes {
        release {
            signingConfig = signingConfigs.getByName("release")
        }
        debug {
            signingConfig = signingConfigs.getByName("debug")
        }
    }
}

flutter {
    source = "../.."
}
